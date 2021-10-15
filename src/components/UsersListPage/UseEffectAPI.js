import './usersListPage.css';
import { FaGithub } from 'react-icons/fa';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from 'react';

const UseEffectAPI = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [users, setUsers] = useState([]);

  const [details, setDetails] = useState([]);

  const getUsers = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  };
  const getDetails = async (user) => {
    // eslint-disable-next-line no-undef
    const response = await fetch(`https://api.github.com/users/${user}`);
    const details = await response.json();
    // eslint-disable-next-line no-undef
    console.log('details:', details);
    setDetails([details.repos_url]);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <div class='appName'>
        <h1 className='py-3 bg-white'>
          <FaGithub />
          Github Users
        </h1>
      </div>
      {details.length === 0 ? (
        <div className='container-fluid mt-5'>
          <div className='row'>
            {users.map((curElem) => {
              // eslint-disable-next-line no-undef

              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const { avatar_url, id, login, html_url } = curElem;
              // eslint-disable-next-line no-undef

              return (
                <div key={id} className='col col-4'>
                  <div class='padding'>
                    <div class='card p-3'>
                      <div class='d-flex flex-row mb-3'>
                        <div class='avatar'>
                          <img
                            src={avatar_url}
                            className='rounded'
                            width='76'
                            height='76'
                          ></img>
                        </div>
                        <div class='d-flex flex-column ml-2'>
                          <h4 className='mb-0 mt-0 textLeft'>
                            @{curElem.login}
                          </h4>
                          {/*h4 is for username/login injection*/}
                          <div className='d-flex flex-column'>
                            <span className='number2'>Team</span>
                            {/*here will be budge inserted*/}
                          </div>
                          <div className='d-flex flex-column'>
                            <span className='number1'>ID:#{id}</span>
                            {/*here will be id injection*/}
                          </div>
                          <div className='d-flex flex-column'>
                            <a href={html_url} target='_blank'>
                              <FaGithub />
                              GitHub page
                            </a>
                            {/*here will be button to users profile repos_url*/}
                          </div>
                        </div>
                      </div>
                      <hr class='dropdown-divider'></hr>
                      <div className='d-flex flex-column'>
                        <div class='details'>
                          <div
                            onClick={async () => {
                              await getDetails(login);
                            }}
                          >
                            Details
                          </div>
                          {/*here will be details link*/}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>testowy tekst</div>
      )}
    </div>
  );
};
export default UseEffectAPI;
