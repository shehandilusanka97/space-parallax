import { Parallax } from 'react-parallax';
import Lamna from '../img/lamna.jpg'

const ImageThree = () => (
    <Parallax className='image' bgImage={Lamna} strength={800}>
       <div className='content'>
        <span className='img-txt'>
            A Trip to Space
        </span>
       </div>
    </Parallax>
);
export default ImageThree;