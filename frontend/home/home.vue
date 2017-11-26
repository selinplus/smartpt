<template>
    <div>
    <div>{{message}}</div>
    <Row>
        <Col span="6" ><span>this is 测试</span>
        </Col>
        <Col span="16" offset = 2 style="backgroud:#a45;">这也是另一个col</Col>
    </Row>
    <Row><Col span="18" >新航~~</Col></Row>
    </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return{
        user_id: 'test1',
        message: 'hello jing!'
    }
  }
}
</script>