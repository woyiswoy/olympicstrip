export default function EventPic({ src, alt, className, children, ...props }) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <img src={src} className='w-full max-w-2xl rounded-xl' />
      <span
        className={
          'font-IBMPlexLoop text-sm md:text-base lg:text-lg text-center ' +
          className
        }
      >
        {alt}
      </span>
    </div>
  )
}
