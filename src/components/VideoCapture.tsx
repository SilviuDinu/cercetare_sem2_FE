import React, { useContext, useState } from 'react';
import Webcam from 'react-webcam';
import { LoadingContext } from '../contexts/LoadingContext';
import { ENDPOINTS } from '../enums/endpoints.enum';

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: 'user',
};

const VideoCapture = (props: any) => {
  const [loading, setLoading] = useContext(LoadingContext);
  const [imagesSrc, setImagesSrc] = useState<any[]>([]);
  const [predictions, setPredictions] = useState<any[]>([]);

  const handleImagesClear = () => {
    setImagesSrc([]);
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
        marginBottom: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {imagesSrc.length < 4 && (
        <Webcam
          audio={false}
          height={400}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={videoConstraints}>
          {({ getScreenshot }) => (
            <button
              style={{ marginTop: 16 }}
              onClick={() => {
                if (imagesSrc.length < 4) {
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
          marginTop: 16,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}>
        {imagesSrc.map((imgSrc: any, idx: number) => {
          return <img key={idx} src={imgSrc} alt="Cucu" width={250} style={{ padding: 8 }} />;
        })}
      </div>

      {imagesSrc.length > 3 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <button className="submit-btn" type="submit" onClick={handleImagesSubmit}>
            Send
          </button>
          <button className="submit-btn" type="submit" onClick={handleImagesClear}>
            Retake
          </button>
        </div>
      )}

      <div
        className="images"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
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

      {predictions && (
        <div>
          Dominant emotion:{' '}
          {
            predictions
              .map((pred) => <div>{pred.prediction}</div>)
              .sort(
                (a, b) =>
                  predictions.filter((pred1) => pred1.prediction === (b as any).prediction).length -
                  predictions.filter((pred2) => pred2.prediction === (a as any).prediction).length
              )[0]
          }
        </div>
      )}
    </div>
  );
};

export default VideoCapture;
