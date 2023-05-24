import React from 'react'
import CSVTable from './components/CSVTable';

function dummy() {
  return (
    <div id="anchor-name">dummy page</div>
  )
}
export default function MyPage() {
  return <CSVTable filePath="/path/to/my/csv/file.csv" />;
  
}

