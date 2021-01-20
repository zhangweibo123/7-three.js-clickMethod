var lineInit = function () {
  // 添加形状
  var geometry = new THREE.TorusBufferGeometry(0.3, 0.2, 10, 80);
  var material = new THREE.MeshPhysicalMaterial({ color: 0xa52a2a });
  var sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(2.6, 4, 4.1);
  scene.add(sphere);

  var geometry2 = new THREE.CylinderGeometry(0.05, 0.05, 13, 20);
  var material2 = new THREE.MeshBasicMaterial({ color: 0x008000 });
  var cylinder = new THREE.Mesh(geometry2, material2);
  cylinder.position.set(9.2, 4, 4.1);
  cylinder.rotation.z = -0.5 * Math.PI;
  console.log(cylinder);
  scene.add(cylinder);

  var geometry3 = new THREE.CylinderGeometry(0.05, 0.05, 7, 40);
  var material3 = new THREE.MeshBasicMaterial({ color: 0x008000 });
  var cylinder3 = new THREE.Mesh(geometry3, material3);
  cylinder3.position.set(15.8, 7.5, 4.1);
  console.log(cylinder);
  scene.add(cylinder3);

  var geometry5 = new THREE.SphereGeometry(1, 0.2, 11);
  var material5 = new THREE.MeshPhysicalMaterial({ color: 0xa52a2a });
  var sphere5 = new THREE.Mesh(geometry5, material5);
  sphere5.position.set(15.8, 11.2, 4);
  sphere5.name = "红球";
  scene.add(sphere5);
};
