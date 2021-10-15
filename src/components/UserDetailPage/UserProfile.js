import React, { useState, useEffect } from 'react';
import './userProfile.css';
import { FaGithub } from 'react-icons/fa';

const UserProfile = () => {
  const [users, setUser] = useState([]);

  const getUser = async () => {
    // eslint-disable-next-line no-undef
    const response = await fetch(
      'https://docs.github.com/en/rest/reference/users#get-a-user'
    );
    setUser(await response.json());
  };
  // eslint-disable-next-line no-undef
  userProfile(() => {
    getUser();
  }, []);
  return (
    <div>
      <div class='appName'>
        <h1>
          <FaGithub />
          Github Users
        </h1>
      </div>
      <div className='container-fluid mt-5'>
        <div className='row'>
          {users.map((curElem) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { avatar_url, id, login, repos_url } = curElem;
            return (
              <div className='col col-4'>
                <div class='padding'>
                  <div class='card p-3'>
                    <div class='d-flex flex-row mb-3'>
                      <div class='avatar'>
                        <img
                          src={avatar_url}
                          className='rounded'
                          width='76'
                          height='76'
                        ></img>{' '}
                      </div>
                      <div class='d-flex flex-column ml-2'>
                        <h4 className='mb-0 mt-0 textLeft'>@{curElem.login}</h4>{' '}
                        {/*h4 is for username/login injection*/}
                        <div className='d-flex flex-column'>
                          <span className='number2'>Team</span>{' '}
                          {/*here will be budge inserted*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number1'>ID:#{id}</span>{' '}
                          {/*here will be id injection*/}
                        </div>
                        <div className='d-flex flex-column'>
                          <span className='number3'>
                            <FaGithub />
                            GitHub page
                          </span>{' '}
                          {/*here will be button to users profile repos_url*/}
                        </div>
                      </div>
                    </div>
                    <div className='d-flex flex-column'>
                      <div class='details'>
                        <button type='button' class='btn btn-link'>
                          Details
                        </button>{' '}
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
    </div>
  );
};
export default UserProfile;
