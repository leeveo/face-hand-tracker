import FaceLandmarker from '@/components/face-landmarks';

export default function Home() {
	return (
		<>
			<div style={{ width: '1px', height: '1px', overflow: 'hidden' }}>
				<FaceLandmarker />
			</div>
			<iframe 
				src="https://www.leevea.fr" 
				style={{ width: '100%', height: '100vh', border: 'none' }} 
				title="Leevea"
			/>
		</>
	);
}
