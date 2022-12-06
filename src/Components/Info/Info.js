import { FaClipboardList } from 'react-icons/fa'
import './Info.css';

export default function Info() {
    return (
        <div className='info-tittle-container'>
            <h1 className='info-tittle'>37 - Supported Languages</h1>
            <span className='info-icon'>
                <FaClipboardList />
            </span>
        </div>
    )
}
