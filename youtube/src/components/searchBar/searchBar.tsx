import { useState, FC } from 'react';

import './searchBar.css';

type propsType = {
    handleFormSubmit: any
}

const SearchBar: FC<propsType> = (props) => {

    const [username, setUsername] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.handleFormSubmit(username);
    }

    return (
        <div className="searchBar mb-5">
            <p>Enter Channel ID</p>
            <form onSubmit={handleSubmit} className="form">
                <div className="fields">
                    <label htmlFor="userSearch"></label>
                    <input
                        placeholder="example: 'UCK8sQmJBp8GCxrOtXWBpyEA'"
                        onChange={handleChange}
                        name="userSearch"
                        type="text" />
                    <button 
                        className="btn btn-danger btn-sm ml-3" 
                        type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;