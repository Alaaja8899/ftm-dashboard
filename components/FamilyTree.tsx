import React from "react";
import '../app/FamilyTree.css';

interface PersonProps {
    name: string;
    gender: string;
    role: string;
  }
  
  const Person: React.FC<PersonProps> = ({ name, gender, role }) => {
    return (
      <div className={`person ${role} ${gender}`}>
        <div className="name">{name}</div>
      </div>
    );
  };
  
  const FamilyTreeComponent: React.FC = () => {
    return (
      <div className="tree max-w-full overflow-x-scroll dark:text-black">
        <ul>
          <li>
            <div className="family">
              <Person name="Grandfather" gender="male" role="child" />
              <div className="parent">
                <Person name="Grandmother" gender="female" role="" />
                <ul>
                  <li>
                    <div className="family" style={{ width: "172px" }}>
                      <Person name="Uncle" gender="male" role="child" />
                      <div className="parent">
                        <Person name="Wife of Uncle" gender="female" role="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="family" style={{ width: "172px" }}>
                      <Person name="Aunt" gender="female" role="child" />
                      <div className="parent">
                        <Person name="Husband of Aunt" gender="male" role="" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="family" style={{ width: "344px" }}>
                      <Person name="Mother" gender="female" role="child" />
                      <div className="parent">
                        <Person name="Father" gender="male" role="" />
                        <ul>
                          <li>
                            <Person name="Me" gender="male" role="child" />
                          </li>
                          <li>
                            <Person name="Sister" gender="female" role="child" />
                          </li>
                        </ul>
                      </div>
                      <Person name="Spouse" gender="male" role="spouse" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  
  export default FamilyTreeComponent;
  