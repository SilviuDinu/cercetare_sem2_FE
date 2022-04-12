import { divide } from 'lodash';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { LoadingContext } from '../contexts/LoadingContext';
import { ENDPOINTS } from '../enums/endpoints.enum';

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
};

const MAX_PHOTOS = 10;

const VideoCapture = (props: any) => {
  const [, setLoading] = useContext(LoadingContext);
  const [imagesSrc, setImagesSrc] = useState<any[]>([]);
  const [predictions, setPredictions] = useState<any[]>([]);
  const [counter, setCounter] = useState(5);
  const [testLinkClicked, setTestLinkClicked] = useState(false);
  const [autoSubmit, setAutoSubmit] = useState<any>(true);
  const captureButtonRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (counter > 0) {
      const timeout = setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      if (imagesSrc.length <= MAX_PHOTOS) {
        clearTimeout((intervalRef as any).current);
        if (captureButtonRef.current) {
          (intervalRef as any).current = setTimeout(() => (captureButtonRef as any).current.click(), 200);
        }
      }
    }
    if (imagesSrc.length === MAX_PHOTOS && !predictions.length) {
      handleImagesSubmit();
    }
  }, [counter, imagesSrc]);

  const handleImagesClear = () => {
    setImagesSrc([]);
    setPredictions([]);
    setCounter(5);
  };

  const handleImagesSubmit = async () => {
    setLoading(true);
    try {
      const reqBody = {
        images: imagesSrc,
      };
      const response = await fetch(ENDPOINTS.PREDICT_EMOTION, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reqBody),
      });

      if (response.ok) {
        const data = await response.json();
        setPredictions(data.images);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 1000,
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {counter > 0 && <h1>Taking pictures in: {counter} seconds</h1>}
      {imagesSrc.length < MAX_PHOTOS && (
        <Webcam
          audio={false}
          height={400}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={videoConstraints}>
          {({ getScreenshot }) => (
            <button
              ref={captureButtonRef}
              style={{ marginTop: 16, visibility: 'hidden' }}
              onClick={() => {
                if (imagesSrc.length < MAX_PHOTOS) {
                  const src = getScreenshot();
                  setImagesSrc(Array.from(new Set([...imagesSrc, src])));
                }
              }}>
              Capture photo
            </button>
          )}
        </Webcam>
      )}

      <div
        className="images"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1000px',
          marginTop: 16,
          overflowX: 'scroll',
        }}>
        {imagesSrc.map((imgSrc: any, idx: number) => {
          return (
            <div key={idx}>
              <img src={imgSrc} alt="Cucu" width={250} style={{ padding: 8 }} />
            </div>
          );
        })}
      </div>

      {imagesSrc.length >= MAX_PHOTOS && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <button disabled={autoSubmit} className="submit-btn" type="submit" onClick={handleImagesSubmit}>
            Send
          </button>
          <button className="submit-btn" type="submit" onClick={handleImagesClear}>
            Retake
          </button>
        </div>
      )}

      <div
        className="images"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1000px',
          overflowX: 'scroll',
        }}>
        {predictions.map((elem: any, idx: number) => {
          return (
            <div key={idx}>
              <img
                src={'data:image/jpeg;base64,' + elem.image}
                alt={elem.prediction}
                width={250}
                style={{ padding: 8 }}
              />
              <p>{elem.prediction}</p>
            </div>
          );
        })}
      </div>

      {predictions.length > MAX_PHOTOS - 1 && imagesSrc.length > MAX_PHOTOS - 1 && (
        <div
          style={{
            textAlign: 'left',
            marginTop: 32,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          Dominant emotion:{' '}
          {
            [...predictions]
              .sort(
                (a, b) =>
                  predictions.filter((pred1) => pred1.prediction === b.prediction).length -
                  predictions.filter((pred2) => pred2.prediction === a.prediction).length
              )
              .map((pred, idx) => (
                <div key={idx} className="row">
                  <div style={{ textAlign: 'center' }}>{pred.prediction}</div>
                  {pred.prediction === 'Sad' && !testLinkClicked && (
                    <div className="row" style={{ marginTop: 32 }}>
                      <div className="row">
                        Sadness is heavily associated with depression. We estimate you may have a form of depression.
                      </div>
                      <div className="row">
                        Please go{' '}
                        <a
                          href="https://patient.info/doctor/patient-health-questionnaire-phq-9"
                          rel="_noopener"
                          onClick={() => setTestLinkClicked(true)}
                          target="_blank">
                          on thie website
                        </a>{' '}
                        to complete a questionnaire and confirm our diagnosis.
                      </div>
                    </div>
                  )}
                  {testLinkClicked && <div style={{ marginTop: 32 }}>Was your result positive?</div>}
                </div>
              ))[0]
          }
        </div>
      )}
    </div>
  );
};

export default VideoCapture;
