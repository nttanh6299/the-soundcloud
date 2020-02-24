import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { KEY_CODES } from '../constants/GlobalConstants';
import { debounce } from 'lodash';
import { DEBOUNCE_TIME } from '../constants/GlobalConstants';

const propTypes = {
  currentQuery: PropTypes.string,
  source: PropTypes.arrayOf(PropTypes.string),
  onSearch: PropTypes.func.isRequired,
  placeHolder: PropTypes.string
};

class NavSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      focus: false,
      expand: false,
      filteredOptions: []
    };

    this.search = null;
    this.onSearch = this.onSearch.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onChange = this.onChange.bind(this);

    this.renderSelect = this.renderSelect.bind(this);
    this.setStateDebounce = this.setStateDebounce.bind(this);
    this.filterOptionDebounce = this.filterOptionDebounce.bind(this);

    this.emitSetStateDebounce = debounce(this.setStateDebounce, DEBOUNCE_TIME);
    this.emitChangeDebounce = debounce(
      this.filterOptionDebounce,
      DEBOUNCE_TIME
    );
  }

  componentDidMount() {
    this.setState({ filteredOptions: [...this.props.source] });
  }

  setStateDebounce(newState) {
    this.setState({ ...newState });
  }

  filterOptionDebounce(value = '') {
    const { source = [] } = this.props;
    const filteredOptions = source.filter(
      query => query.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
    this.setState({ filteredOptions, expand: true, focus: true });
  }

  onSearch() {
    const { search, props } = this;
    const { currentQuery, onSearch } = props;

    const value = search.value.trim();
    if (value !== '' && currentQuery !== value) {
      window.scrollTo(0, 0);
      onSearch(value);
    }
    this.setState({ expand: false, focus: false });
  }

  onKeyPress(e) {
    const code = e.which || e.keyCode;
    if (code === KEY_CODES.ENTER) {
      this.onSearch();
    }
  }

  onClear() {
    const { search } = this;
    search.value = '';
    search.focus();
  }

  onFocus() {
    this.setState({ focus: true, expand: true });
  }

  onBlur() {
    this.emitSetStateDebounce({ expand: false, focus: false });
  }

  onSelect(value) {
    const self = this;
    const { search, onSearch } = self;
    return function() {
      search.value = value;
      onSearch(value);
    };
  }

  onChange(e) {
    this.emitChangeDebounce(e.target.value);
  }

  renderSelect(source) {
    const result = [];
    for (let i = source.length - 1; i >= 0; i--) {
      result.push(
        <div
          key={i}
          onClick={this.onSelect(source[i])}
          className="nav-search__history__item"
        >
          <i className="fas fa-history nav-search__history__icon"></i>
          <span className="nav-search__history__query">{source[i]}</span>
        </div>
      );
    }
    return result;
  }

  render() {
    const { focus, expand, filteredOptions } = this.state;
    const { placeHolder = '' } = this.props;

    return (
      <div className="nav-search">
        <i
          onClick={this.onSearch}
          className="nav-search__icon fas fa-search"
        ></i>
        <input
          ref={node => (this.search = node)}
          onKeyPress={this.onKeyPress}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className="nav-search__input"
          type="text"
          placeholder={placeHolder}
        />
        <i
          onClick={this.onClear}
          className={`fas fa-times-circle nav-search__clear ${
            focus ? 'nav-search__clear--active' : ''
          }`}
        ></i>
        {expand && (
          <div className="nav-search__history">
            {this.renderSelect(filteredOptions)}
          </div>
        )}
      </div>
    );
  }
}

NavSearch.propTypes = propTypes;

export default NavSearch;
