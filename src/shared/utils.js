
class Utils {

    static setRoutes(config)
    {
        let routes = [...config.routes];

        if ( config.settings || config.auth )
        {
            routes = routes.map((route) => {
                let auth = config.auth ? config.auth : '';
                auth = route.auth ? [...auth, ...route.auth] : auth;
                return {
                    ...route,
                    auth
                };
            });
        }

        return [...routes];
    }

    static generateRoutesFromConfigs(configs)
    {
        let allRoutes = [];
        configs.forEach((config) => {
            allRoutes = [
                ...allRoutes,
                ...this.setRoutes(config)
            ]
        });
        return allRoutes;
    }

}

export default Utils;
