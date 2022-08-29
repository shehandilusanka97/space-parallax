import { Parallax } from 'react-parallax';
import Thom from '../img/thom.jpg'

const ImageTwo = () => (
    <Parallax className='image' bgImage={Thom} strength={800}>
       <div className='content'>
        <span className='img-txt'>
            A Trip to Space
        </span>
       </div>
    </Parallax>
);
export default ImageTwo;