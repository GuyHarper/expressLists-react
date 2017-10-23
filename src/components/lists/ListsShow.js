import React from 'react';
import Axios from 'axios';

class ListsShow extends React.Component {

  state = {
    list: {
      entries: []
    },
    newEntry: {
      text: '',
      active: true
    }
  }

  componentWillMount = () => {
    Axios
      .get(`/api/lists/${this.props.match.params.id}`)
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log(err));
  }

  deleteFood = () => {
    Axios
      .delete(`/api/lists/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  newEntry = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/lists/${this.state.list.id}/entries`, this.state.newEntry)
      .then(this.componentWillMount)
      .catch(err => console.log(err));
  }

  handleChange = ({ target }) => {
    const entry = Object.assign({}, this.state.newEntry, { text: target.value, active: true });
    this.setState({ newEntry: entry });
  }

  render() {
    return (
      <section>
        <ul>
          {
            this.state.list.entries.filter(entry => {
              return entry.active;
            }).map(entry => {
              return (
                <li key={entry.id} className="row card-container">
                  <div className="col is-half">
                    <div className="row is-gapless is-multiline is-mobile">

                      {entry.text}

                      {/* <form method="POST" action="/lists/<%= list.id %>/entries/<%= entry.id %>" className="col justify-content-center is-narrow entry-active-update-form">
                      <input type="hidden" name="_method" value="PUT" />
                      <input type="hidden" name="active" value="false" />
                      <div className="checkbox-div"><i className="fa fa-square-o" aria-hidden="true"></i></div>
                    </form> */}

                      {/* <form method="POST" action="/lists/<%= list.id %>/entries/<%= entry.id %>" className="col entry-update-form">
                      <div className="row is-mobile">
                        <input type="hidden" name="_method" value="PUT" />
                        <input type="hidden" name="active" value="true" />
                        <div className="field col">
                          <div className="control">
                            <label htmlFor="entry-input-<%= entry.id %>" hidden>Entry</label>
                            <input type="text" name="text" id="entry-input-<%= entry.id %>" value="<%= entry.text %>" className="input entry-input is-medium" autocomplete="off" />
                          </div>
                        </div>
                      </form> */}

                      {/* <div className="col is-narrow justify-content-center">
                        <button className="button is-small add-comment-button">Add comment</button>
                      </div> */}

                      {/* <form method="POST" action="/lists/<%= list.id %>/entries/<%= entry.id %>" className="col is-narrow justify-content-center">
                        <input type="hidden" name="_method" value="DELETE" />
                        <button className="button is-small">Delete</button>
                      </form> */}

                    </div>
                  </div>
                </li>
              );
            })
          }
        </ul>

        <ul>
          <li className="row">
            <div className="col col-6">
              <form onSubmit={this.newEntry} className="row">
                <div className="form-group col">
                  <label htmlFor="new-entry" hidden>Entry</label>
                  <input onChange={this.handleChange} type="text" name="text" id="new-entry" autoComplete="off" className="form-control" placeholder="Add entry" autoFocus/>
                </div>
                <div className="col col-auto justify-content-center">
                  <button className="button add-entry-button hidden"><i className="fa fa-plus" aria-hidden="true"></i></button>
                </div>
              </form>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default ListsShow;
