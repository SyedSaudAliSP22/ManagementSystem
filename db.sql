-- PostGreSQL
CREATE TABLE user_roles (
role_id SERIAL PRIMARY KEY,
role_name VARCHAR(50)
);

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
full_name VARCHAR(255),
role_id INT,
constraint fk_roleid 
	FOREIGN KEY (role_id) 
	REFERENCES user_roles(role_id)
);

ALTER TABLE users ADD column email VARCHAR(255)

ALTER TABLE users ADD column password VARCHAR(255)

