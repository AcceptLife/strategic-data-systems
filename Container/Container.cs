using System;
using Microsoft.Practices.Unity;

namespace DeveloperSample.Container
{
    public class Container
    {
        public void Bind(Type interfaceType, Type implementationType) => {
            var instance = new UnityContainer();
            instance.RegisterType<interfaceType, implementationType>();
        };
        public T Get<T>() => {
            return typeof(T);
        };
    }
}