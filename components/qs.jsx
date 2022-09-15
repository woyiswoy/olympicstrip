import { useState } from 'react'

export default function Question({
  q,
  ch,
  ans,
  className,
  children,
  hover,
  ...props
}) {
  const [selected, setSelected] = useState(false)
  return (
    <div className={className + ' flex flex-col items-start gap-3'}>
      <span className='font-IBMPlex font-semibold text-xl md:text-2xl lg:text-3xl'>
        {q}
      </span>
      <div className='flex flex-col w-full gap-1 font-IBMPlexLoop items-start text-base md:text-lg lg:text-xl'>
        {ch.map((ch, chi) => (
          <button
            key={chi}
            onClick={() =>
              selected === chi + 1 ? setSelected(false) : setSelected(chi + 1)
            }
            className={
              (selected
                ? chi + 1 === ans
                  ? 'bg-green-200 shadow-lg '
                  : selected === chi + 1
                  ? 'bg-red-200 shadow-lg '
                  : 'bg-transparent '
                : (hover || 'hover:bg-gray-200') + ' ') +
              'w-full text-left transition-colors duration-500 px-4 py-2 rounded-full'
            }
          >
            {chi + 1}. {ch}
          </button>
        ))}
      </div>
    </div>
  )
}
