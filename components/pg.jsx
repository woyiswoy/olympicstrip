export default function Paragraph({ className, children, ...props }) {
  return (
    <span
      className={
        className +
        ' font-IBMPlexLoop leading-relaxed md:leading-relaxed lg:leading-relaxed xl:leading-relaxed'
      }
      {...props}
    >
      {children}
    </span>
  )
}
