export function SingleInputbox({label, placeholder}){
    return <div>
      <div className="text-sm font-medium text-left py-2">
      {label} <br /></div>  
        <input type="text" placeholder={placeholder} className="w-full px-2 py-1 border-2"/>
        
    </div>
}