import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getPatterns from '../store';
import {
  Tile,
  Title,
  Subtitle,
} from 'carbon-components-react/lib/components/UIShell';

const PatternItem = (patt) => {
  console.log('patt', patt);

  return (
    <Tile key={patt}>
      <Title>{patt.title}</Title>
      <Subtitle>{patt.author}</Subtitle>
    </Tile>
  );
};
/**
 * COMPONENT
 */
export const PatternList = (props) => {
  // const { list } = props;
  const [list, setList] = useState([]);
  console.log('list', list);

  if (list !== undefined && list.length > 0) {
    return (
      <>
        {list.map((patt) => (
          <PatternItem patt={patt} key={patt.id} />
        ))}
      </>
    );
  } else {
    props.getPatterns();
    return (
      <>
        <Title>Whoops, you don't have any patterns uploaded yet.</Title>
      </>
    );
  }
};

/**
 * CONTAINER
 */

const mapState = (state) => {
  return {
    list: state.patterns,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getPatterns: () => dispatch(getPatterns()),
  };
};
export default connect(mapState, mapDispatch)(PatternList);

/**
 * PROP TYPES
 */
PatternList.propTypes = {
  list: PropTypes.array,
};
