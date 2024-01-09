import './Dropdown.scss';
function Dropdown(params){

return (
        <div className='dropdown-content'>
                <div className='dropdown'>
                        <span>{params.title}</span>
                        <i className="fa-solid fa-angle-up"></i>
                </div>

        </div>
)

}

export default Dropdown;