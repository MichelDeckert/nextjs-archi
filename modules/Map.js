import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
	return (
		<MapContainer
			center={[49.82409587163723, 73.08560229831559]}
			zoom={13}
			scrollWheelZoom={true}
			style={{ height: "100%", width: "100%" }}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[49.82409587163723, 73.08560229831559]}>
				<Popup>
					100000, République du Kazakhstan,
					<br /> Karaganda, st. Télévision 10
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
