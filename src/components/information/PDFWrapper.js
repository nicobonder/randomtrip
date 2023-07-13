import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import PDFCreator from './PDFCreator';

import { useContext } from 'react';
import { MyContext } from '../../myContext';

export default function PDFWrapper() {
    const { km, food, read, total } = useContext(MyContext);

    return(
<PDFDownloadLink className='PDFBtn' document={<PDFCreator km={km} food={food} read={read} total={total} />} fileName="randomTrip.pdf">
  {({ blob, url, loading, error }) =>
    loading ? 'Cargando información' : 'Descargar información'
  }
</PDFDownloadLink>
    )
} 

