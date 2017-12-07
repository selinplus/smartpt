<template>
    <div>
        <div>
            <h3>{{username}}的联络人</h3>        
        </div>
        <Collapse v-model="customers">
            <Panel v-for="customer of customers" :key="customer.id" name="{{customer.id}}">
                {{customer.name}}
                <p slot="content">
                    <Timeline>
                        <TimelineItem color="green">
                            <Icon type="trophy" slot="dot"></Icon>
                            <span>enter this platform</span>
                        </TimelineItem>
                        <TimelineItem>
                            <p class="time">1976年</p>
                            <p class="content">Apple I 问世</p>
                        </TimelineItem>
                        <TimelineItem>发布2.0版本</TimelineItem>
                        <TimelineItem>发布3.0版本</TimelineItem>
                    </Timeline>
                </p>
            </Panel>
            
        </Collapse>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.time{
        font-size: 14px;
        font-weight: bold;
    }
.content{
    padding-left: 5px;
}
</style>