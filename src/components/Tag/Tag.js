import './Tag.scss';
function Tag(props) {
        return (
                <div className='tag'>
                        {props.logement.tags}
                </div>
        )

}

export default Tag;