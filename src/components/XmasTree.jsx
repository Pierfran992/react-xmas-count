// IMPORT
import Tree from '../assets/tree.png';
import Ball1 from '../assets/ball_1.png';
import Ball2 from '../assets/ball_2.png';
import Ball3 from '../assets/ball_3.png';
import Ball4 from '../assets/ball_4.png';
import Ball5 from '../assets/ball_5.png';
import Gift1 from '../assets/gift_1.png';
import Gift2 from '../assets/gift_2.png';
import Gift3 from '../assets/gift_3.png';

// ________________________________

// COMPONENTI
export default function XmasTree() {
    return (
        <>
            {/* albero */}
            <img src={Tree} alt='albero' />

            {/* palline */}
            <img className='ball ball_1' src={Ball3} alt='palline 3' />
            <img className='ball ball_2' src={Ball1} alt='palline 1' />
            <img className='ball ball_3' src={Ball4} alt='palline 4' />
            <img className='ball ball_4' src={Ball2} alt='palline 2' />
            <img className='ball ball_5' src={Ball5} alt='palline 5' />

            {/* regali */}
            <img className='gift gift_1' src={Gift1} alt='regalo 1' />
            <img className='gift gift_2' src={Gift2} alt='regalo 2' />
            <img className='gift gift_3' src={Gift3} alt='regalo 3' />
        </>
    );
}
// ___________________________________