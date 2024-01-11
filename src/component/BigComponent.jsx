import React from 'react'
import { Link } from 'react-router-dom'

export default function BigComponent() {
  return (
    <div className=" gap-2 col-3  mx-auto">
      <Link to="/users" className="btn btn-info mt-5 mx-4 btn-lg">
        Users
      </Link>
      <Link to="/comments" className="btn btn-success mt-5 btn-lg">
        Comments
      </Link>
      <Link to="/albums" className="btn btn-danger mt-5 mx-4 btn-lg">
        Albums
      </Link>
      <Link to="/photos" className="btn btn-warning mt-5 btn-lg">
        Photos
      </Link>
      <Link to="/todos" className="btn btn-primary mt-5 mx-4 btn-lg">
        Todos
      </Link>
      <Link to="/posts" className="btn btn-secondary mt-5 btn-lg">
        Posts
      </Link>
    </div>
  );
}
