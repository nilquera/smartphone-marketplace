import { Link, Route } from "react-router-dom";
import "./styles.css";

const routes = [
  { path: "/", name: "List" },
  { path: "/details/:id", name: "Details" },
];

export default function Breadcrumb() {
  return (
    <div className="header-breadcrumb">
      {routes.map(({ path, name }, key) => {
        return (
          <Route
            exact
            path={path}
            key={key}
            render={(props) => {
              const crumbs = routes
                .filter(({ path }) => props.match.path.includes(path))
                .map(({ path, ...rest }) => ({
                  path: Object.keys(props.match.params).length
                    ? Object.keys(props.match.params).reduce(
                        (path, param) =>
                          path.replace(`:${param}`, props.match.params[param]),
                        path
                      )
                    : path,
                  ...rest,
                }));

              return (
                <>
                  <span>Home</span>
                  {crumbs.map(({ name, path }, key) => {
                    return (
                      <>
                        <span>{" / "}</span>
                        <Crumb path={path} name={name} key={name} />
                      </>
                    );
                  })}
                </>
              );
            }}
          />
        );
      })}
    </div>
  );
}

function Crumb({ path, name }) {
  return <Link to={path}>{name}</Link>;
}
