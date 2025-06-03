import React from 'react'

type Props = {
  id: string;
  title: string;
  img: string;
  isPreferito: boolean;
  onToggle: () => void;
}

const Card = ({ id, title, img, isPreferito, onToggle }: Props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg w-full" src={img} alt={title} />
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">ID: {id}</p>
        <button onClick={onToggle}>
          <img
            src={isPreferito ? '/src/assets/favorite.svg' : '/src/assets/not-favorite.svg'}
            alt="favorite icon"
            style={{ height: 16 }}
          />
        </button>
      </div>
    </div>
  )
}

export default Card
