function listofnameempcode($scope) {
    $scope.userinfo = [
        {username: 'neo', empcode: 2, select: false},
        {username: 'matrics', empcode: 12, select: false}
    ];
    $scope.adduserdata = function () {
        $scope.userinfo.push({username: $scope.userdata.username, empcode: $scope.userdata.empcode, select: false});
        $scope.userdata.username = $scope.userdata.empcode = '';
    };
    $scope.edituserdata = function(index){
        $scope.userdata = $scope.userinfo[index];
        $scope.edit = true;
    };
    $scope.applyChanges = function(index){
        $scope.userdata = {};
        $scope.edit = false;
    };
    $scope.deleteuserdata = function(index){
        $scope.userinfo.splice(index, 1);
    };
}
