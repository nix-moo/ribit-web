/* eslint-disable react/no-unused-state */
import React from 'react'
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import { FileUploaderDropContainer } from 'carbon-components-react'
// import { uploadPattern } from '../store'

const PatternUpload = () => {
  const handleChange = evt => {
    console.log('Got file')
    console.log('evt.target', evt.target)
  }

  return (
    <>
    <div bx--col-md-6 bx--col-lg-6>
      <h1>File Upload</h1>
    </div>
    <div className="bx--file__container bx--col-md-6 bx--col-lg-6">
      <strong className="bx--file--label">Pattern PDF</strong>
      <p className="bx--label-description">Only .pdf files.</p>
      <FileUploaderDropContainer
        accept={['application/pdf']}
        labelText="Drag & drop file here or click to upload"
        multiple="false"
        tabIndex={0}
        onChange={handleChange}
      />
    </div>
    </>
  )
}

// const mapDispatch = dispatch => {
//   return {
//     uploadPattern: patternFile => dispatch(uploadPattern(patternFile))
//   }
// }

export default PatternUpload
// export default connect(mapDispatch)(PatternUpload)
