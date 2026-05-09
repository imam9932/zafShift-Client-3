import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const AdminDashboardHome = () => {
    const axiosSecure=useAxiosSecure()
    const {data:deliverStatus=[]}=useQuery({
        queryKey:['delivery-status-stats'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/parcels/delivery-status/stats')
            return res.data
        }
    });

    const getPieChartData=data=>{
        return data.map(item=>{
            return {name:item.status,value:item.count}})
    }
    return (
        <div>
            <h1 className='text-center font-bold text-2xl'>DashBoard for Admin</h1>
           <div className="stats shadow">
 {
    deliverStatus.map(stat=>  <div className="stat" key={stat._id}>
    <div className="stat-figure">
   
    </div>
    <div className="stat-title text-secondary font-bold text-lg"> {stat._id}</div>
    <div className="stat-value text-center"> {stat.count}</div>
    
  </div>)
 }

  
</div> 

<div className='w-full h-[400px]'>
     <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={getPieChartData(deliverStatus)}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={true}
      />
      {/* <RechartsDevtools /> */}
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
</div>
        </div>
    );
};

export default AdminDashboardHome;