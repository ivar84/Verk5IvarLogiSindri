using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace verk5
{
	public static class WebApiConfig
	{
		public static void Register(HttpConfiguration config)
		{

			var json = config.Formatters.JsonFormatter;
			json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
			config.Formatters.Remove(config.Formatters.XmlFormatter);

			config.Routes.MapHttpRoute(
				name: "GetLectures",
				routeTemplate: "api/v1/lectures/{LectureID}/{controller}",
				defaults: new { controller = "CommentController" }
			);

			config.Routes.MapHttpRoute(
				name: "DefaultApi",
				routeTemplate: "api/v1/{controller}/{id}",
				defaults: new { id = RouteParameter.Optional }
			);
		}
	}
}