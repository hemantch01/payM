export const SingleInputbox = ({label, placeholder, onChange}) => {
    return <div>
      <div className="text-sm font-medium text-left py-2">
      {label} <br /></div>  
        <input onChange={onChange} type="text"  placeholder={placeholder} className="w-full px-2 py-1 border-2 rounded-md"/>
        
    </div>
}