import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="containerNotFound">
      <Logo />
      <div className="wrapperNotFound">
        <h1>404. Not found</h1>
        <Link to='/'>
          <span>Вернуться на главную</span>
        </Link>
      </div>
    </div>
  );
}
