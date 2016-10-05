var {connect} = require('react-redux');
var Actions = require('../actions');
var Routes = require('../components/routes');

const getActiveRoute = (state) => {
    return state.routes.find((r) => {
        return r.id === state.activeRoute;
    });
}

const mapStateToProps = (state) => {
    return {
        routes: state.routes,
        activeRoute: getActiveRoute(state) || state.routes[0]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: () => {
            dispatch(Actions.addRoute())
        },
        onRemove: (id) => {
            dispatch(Actions.removeRoute(id))
        }
    }
};

const RoutesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Routes);

module.exports = RoutesContainer;