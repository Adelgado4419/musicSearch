import GalleryItem from './GalleryItem'
import { DataContext } from '../Context/DataContext'
import { useContext} from 'react'


function Gallery(){
    const data = useContext(DataContext)

    const songList =data.map((song, index) => {
        return (
            <GalleryItem item={song} key={index}/>
        )
    })
    return (
        <div>
            {songList}
        </div>
    )
}

export default Gallery
