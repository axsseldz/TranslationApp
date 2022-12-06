import { BsGithub, BsTranslate } from 'react-icons/bs'
import './Header.css';

export default function Header() {
  return (
    <div className='container'>
      <h1 className='tittle-container'>Translation App</h1>
      <span className='translate-icon-container'>
        <BsTranslate />
      </span>
      <span className='github-icon-container'>
        <BsGithub />
      </span>
    </div>
  )
}