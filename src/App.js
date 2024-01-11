import React from 'react'
import Users from './component/Users'
import Comments from './component/Comments'
import Albums from './component/Albums'
import Photos from './component/Photos'
import { Route, Routes } from 'react-router-dom'
import BigComponent from './component/BigComponent'
import Todos from './component/Todos';
import Posts from './component/Posts'

export default function App() {
  return (
    <div className='container'>
      <div className="row">
        <BigComponent />
        <div>
          <Routes>
            <Route path="comments" element={<Comments />} />
            <Route path="albums" element={<Albums />} />
            <Route path="photos" element={<Photos />} />
            <Route path="users" element={<Users />} />
            <Route path="todos" element={<Todos />} />
            <Route path="posts" element={<Posts />} />
          </Routes>          
        </div>
      </div>
    </div>
  );
}
