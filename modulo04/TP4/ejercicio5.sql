a) select apellido from empleados;
b) select distinct apellido from empleados;
c) show columns from empleados;
d) select nombre, apellido from empleados;
e) select empleados.cuil_cuit, departamentos.nombre from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id;
f) select concat(nombre, ' ', apellido) as nombre_completo from empleados;
g) select concat(upper(nombre), ' ', upper(apellido)) as nombre_completo from empleados;
h) select concat(lower(nombre), ' ', lower(apellido)) as nombre_completo from empleados;
i) select nombre, presupuesto as valor_actual from departamentos order by presupuesto asc;
j) select nombre from departamentos order by nombre asc;
k) select nombre from departamentos order by nombre desc;
l) select apellido, nombre from empleados order by apellido asc, nombre asc;
m) select nombre, presupuesto from departamentos order by presupuesto desc limit 3;
n) select nombre, presupuesto from departamentos order by presupuesto asc limit 3;
o) select nombre, presupuesto from departamentos where presupuesto >= 150000;
p) select nombre, presupuesto from departamentos where presupuesto >= 100000 and presupuesto <= 200000;
q) select nombre from departamentos where presupuesto < 100000 or presupuesto > 200000;
r) select nombre from departamentos where presupuesto between 100000 and 200000;
s) select empleados.nombre as Nombres, empleados.apellido as Apellidos, departamentos.nombre as Nombre_del_deparatamento from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id;
t) select empleados.*, departamentos.nombre as Nombre_de_los_departamentos, departamentos.presupuesto, departamentos.estado from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id order by departamentos.nombre asc, apellido asc, nombre asc;
u) select departamentos.departamento_id, departamentos.nombre from departamentos inner join empleados on departamentos.departamento_id = empleados.departamento group by departamentos.departamento_id, departamentos.nombre;
v) select departamentos.nombre as LO_QUE_QUIERO_BUSCAR from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.cuil_cuit = '27-38382980-3';
w) select departamentos.nombre as Nombre_del_Departamento from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and empleados.nombre = 'Pepe' and empleados.apellido = 'Ruiz';
x) select empleados.*, departamentos.nombre from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and departamentos.nombre = 'I+D' order by empleados.nombre, apellido;
y) select empleados.*, departamentos.nombre from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id and departamentos.nombre in ('Sistemas', 'Contabilidad', 'I+D') order by empleados.apellido asc, empleados.nombre asc;
z) select empleados.nombre as Nombresiños from empleados inner join departamentos on empleados.departamento = departamentos.departamento_id where departamentos.presupuesto < 100000 or departamentos.presupuesto > 200000