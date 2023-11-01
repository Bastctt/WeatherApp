import './Weather.css';

function Weather () {
    return (
    <div className='container'> 
        <div className='card'>
           <form>
            <input className='input' required-type='text' id='City'></input>
            <label className='label' for="City" ></label>
            <button><span class="material-symbols-outlined">search</span></button>
           </form>
           <div className='city'></div>
           <div className='propriete'></div>
        </div>
    </div>
    )
};

export default Weather;