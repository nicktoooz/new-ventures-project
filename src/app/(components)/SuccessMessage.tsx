import { Player } from '@lottiefiles/react-lottie-player';
import successAnim from '../../../public/success.json';

export function SuccessMessage({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    visible && (
      <div className={`h-screen mt-8 w-full fixed bg-[#00000026] z-50 grid place-items-center top-0 left-0`}>
        <div className={`max-w-96 mx-8 px-8 py-12 flex flex-col items-center bg-white rounded-lg`}>
          <Player src={successAnim} keepLastFrame autoplay style={{ height: '250px', width: '250px' }} />
          <h1 className={`text-center text-2xl font-medium`}>Quote sent!</h1>
          <p className={`text-center mt-6`}>Vestibulum ac mi lorem. Suspendisse sed viverra lorem. Fusce condimentum facilisis mollis.</p>
          <button onClick={() => onClose()} className={`bg-[#5465FF] text-[1.2em] text-white rounded px-8 py-2 mt-6`}>
            Dones
          </button>
        </div>
      </div>
    )
  );
}
