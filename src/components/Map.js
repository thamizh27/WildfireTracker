import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfo from "./LocationInfo";

const Map = ({ data, center, zoom }) => {
  const [infoBox, setInfoBox] = useState(null);

  const marker = data.map((datas) => {
    if (datas.categories[0].id === 8) {
      return (
        <LocationMarker
          key={datas.id}
          lat={datas.geometries[0].coordinates[1]}
          lng={datas.geometries[0].coordinates[0]}
          onClick={() => setInfoBox({ id: datas.id, title: datas.title })}
        />
      );
    }

    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
         bootstrapURLKeys={{ key: /* Your API key */ }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marker}
      </GoogleMapReact>
      {infoBox && <LocationInfo info={infoBox} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
