import React,{useState} from 'react'
import 'semantic-ui-css/semantic.min.css'

const SearchBar=({onFormSubmit})=>{
    const [text, settext] = useState('');
    const Onclicked = (e) => {
        settext(e.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();   // prevents the page to refresh...
        onFormSubmit(text);
    }
     return (
            <div className="ui segment" >
                <form onSubmit={onSubmit} className="ui form" >
                    <div className="field">
                        <label style={{ fontSize: "18px" }}>Video Search</label>
                        <input
                            onChange={Onclicked}
                            value={text}
                            type="text" placeholder="Enter text here..."
                        />
                    </div>
                </form>
            </div>
        )
}

 export default SearchBar