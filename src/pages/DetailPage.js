import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/data';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />
}
  
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      detailNote: getNote(props.id)
    }
  }
  
  render() {
    if (this.state.detailNote === undefined) {
      return <p>Note is not found!</p>;
    }
  
    return (
      <div className='detail-page'>
        <NoteDetail
          {...this.state.detailNote}
        />
      </div>
    );
  }
}
  
export default DetailPageWrapper;  
