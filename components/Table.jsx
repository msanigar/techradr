import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import jsondata from '../data/data.json';

const Table = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  const handleSubmit = () => {
    axios.post('/.netlify/functions/addData', {
      userid: user ? user.id : 'anonymous',
      scores: techState,
    });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };
  const fetchData = () => {
    axios
      .get('/.netlify/functions/getData')
      .then((res) => {
        setData(res.data);
      })
      .then(() => {
        handleCurrentUserData();
      });
  };
  const values = ['meh', 'hold', 'assess', 'trial', 'adopt'];
  const [techState, changeTechState] = useState(null);
  const handleCurrentUserData = () => {
    if (data && user) {
      const currentUserData = data.find((item) => item.userid === user.id);
      if (currentUserData) {
        changeTechState(currentUserData.scores);
      }
    }
  };

  const handleTechChange = (e) => {
    changeTechState({ ...techState, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <>
      <div className="alert alert-info shadow-lg my-4 mx-auto w-1/2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>
            {user ? `hey, ${user.email} (id: ${user.id})` : null}
            {data ? ' MongoDB is connected!' : null}
          </span>
        </div>
      </div>
      {Object.entries(jsondata).map(([key, value], i) => (
        <div className="overflow-x-auto max-w-7xl my-6 mx-auto" key={i}>
          <form>
            <table className="tech-table table table-fixed table-compact w-full">
              <thead>
                <tr>
                  <th>{key}</th>
                  <th>Meh</th>
                  <th>Hold</th>
                  <th>Assess</th>
                  <th>Trial</th>
                  <th>Adopt</th>
                </tr>
              </thead>
              <tbody>
                {value.map((n, k) => {
                  return (
                    <tr key={k}>
                      <th>{n}</th>
                      {values.map((i, k) => {
                        return (
                          <td key={k}>
                            <input
                              type="radio"
                              name={n}
                              value={i}
                              checked={techState ? techState[n] === i : false}
                              className="radio"
                              onChange={handleTechChange}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      ))}

      <div className="divider"></div>

      <div className="flex flex-col w-full border-opacity-50">
        <button
          className="btn btn-secondary w-28 m-auto"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className="divider"></div>
    </>
  );
};

export default Table;
