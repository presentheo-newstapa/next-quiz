export default function Button(props){

  let defaultClass = 'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 '
  let addedClass = props.classList

  return (
    <button onClick={props.onClick} className={defaultClass + addedClass}>{props.children}</button>
  )
}