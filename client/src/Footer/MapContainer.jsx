import react from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyle = {
        heigt: "72px",
        width: "133px"};

return (
<LoadScript
googleMapsApiKey="BeachOctane">
    <GoogleMap
    mapContainerStyle={mapStyle}/>

</LoadScript>

)
}
export default MapContainer;
