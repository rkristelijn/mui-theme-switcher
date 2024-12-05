'use client';

import { Card, CardContent, Typography } from '@mui/material';

interface StatsCardProps {
  title: string;
  value: string;
}

export const StatsCard = ({ title, value }: Readonly<StatsCardProps>) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};
