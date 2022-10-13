import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/api';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />
}
  
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      detailNote: null,
    }
  }

  async componentDidMount() {
    const note = await getNote(this.props.id);
    this.setState(() => {
      return {
        detailNote: note.data,
      };
    });
  }
  
  render() {
    if (this.state.detailNote === null) {
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
